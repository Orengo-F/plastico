

const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "<userpool_id>";

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username
  };
  const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};


exports.handler = async (event) => {
  try {
    const { id, cart, total, address } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
