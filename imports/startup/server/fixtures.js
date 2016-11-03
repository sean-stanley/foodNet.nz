import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0 ) {
    var id = Accounts.createUser({
        email: 'admin@foodnet.nz',
        password: 'admin',
        profile: {
            name: 'Administrator',
            active: true,
        }
    });
    Roles.addUsersToRoles(id, 'super-admin', Roles.GLOBAL_GROUP);
  }
});
