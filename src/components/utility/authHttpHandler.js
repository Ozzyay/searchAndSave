const apiKey = "";
const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

export const loginHandler = async (input) => {
  const enteredEmail = input.email;
  const enteredPass = input.pass;
  const response = await fetch(loginUrl, {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPass,
      returnSecureToken: true,
    }),
  });
  try {
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return {
      isLoggedIn: true,
      authId: data.idToken,
      userId: data.localid,
    };
  } catch (error) {
    return "Error";
  }
};

export const registrationHandler = async (input) => {
  const enteredEmail = input.email;
  const enteredPass = input.pass;
  const response = await fetch(registerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPass,
      returnSecureToken: false,
    }),
  });
  try {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.errors.message);
    }
    return "Success";
  } catch (error) {
    return error;
  }
};
