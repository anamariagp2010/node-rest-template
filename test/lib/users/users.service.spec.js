const { ValidationError } = require('../../../src/errors');
const usersService = require('../../../src/lib/users/users.service');
const { User } = require('../../../src/lib/users/users.model');

describe('users/service', () => {
  describe('all', () => {
    subject(() => usersService.all({ pageConfig: get('pageConfig') }));

    beforeEach(async () => {
      const usersToInsert = [
        { name: 'name1', email: 'name1@some.com' },
        { name: 'name2', email: 'name2@some.com' },
        { name: 'name3', email: 'name3@some.com' },
      ];
      await User.create(usersToInsert);
    });

    describe('when not passed a page config', () => {
      def('pageConfig', () => undefined);

      it('throws TypeError', () => {
        expect(() => subject()).toThrow("Cannot read property 'page' of undefined");
      });
    });

    describe('when not passed a page config', () => {
      def('pageConfig', () => undefined);

      it('throws TypeError', () => {
        expect(() => subject()).toThrow("Cannot read property 'page' of undefined");
      });
    });

    describe('when passed a page config', () => {
      describe('when getting all the users', () => {
        def('pageConfig', () => ({ page: 0, pageSize: 10 }));

        it('returns the list of users', async () => {
          const users = await subject();
          expect(users).toMatchObject([
            { name: 'name1', email: 'name1@some.com' },
            { name: 'name2', email: 'name2@some.com' },
            { name: 'name3', email: 'name3@some.com' },
          ]);
        });
      });

      describe('when getting the first page (size 2)', () => {
        def('pageConfig', () => ({ page: 0, pageSize: 2 }));

        it('returns the list of users (ignoring inactive) and the total users count', async () => {
          const users = await subject();
          expect(users).toMatchObject([
            { name: 'name1', email: 'name1@some.com' },
            { name: 'name2', email: 'name2@some.com' },
          ]);
        });
      });

      describe('when getting the second page (size 2)', () => {
        def('pageConfig', () => ({ page: 1, pageSize: 2 }));

        it('returns the list of users (ignoring inactive) and the total users count', async () => {
          const users = await subject();
          expect(users).toMatchObject([{ name: 'name3', email: 'name3@some.com' }]);
        });
      });
    });
  });

  describe('create', () => {
    subject(() =>
      usersService.create({
        user: {
          ...get('userData'),
        },
      }),
    );

    describe('when the params pass validations', () => {
      def('userData', () => ({ name: 'a name', email: 'aname@some.com' }));

      it('creates a new user', async () => {
        await subject();
        const user = await User.findOne();
        expect(user).toMatchObject(get('userData'));
      });

      it('returns the newly created user', async () => {
        const result = await subject();
        expect(result).toMatchObject(get('userData'));
      });
    });

    describe('when the params do not pass validations', () => {
      def('userData', () => ({ name: 'a name' }));

      it('throws an error', async () => {
        expect.assertions(2);
        try {
          await subject();
        } catch (e) {
          expect(e).toMatchObject({
            message: 'ValidationError',
            code: ValidationError.code,
          });
          expect(JSON.parse(JSON.stringify(e))).toEqual({
            details: [
              {
                context: {
                  key: 'email',
                  label: 'email',
                },
                message: '"email" is required',
                path: ['email'],
                type: 'any.required',
              },
            ],
          });
        }
      });
    });
  });
});
