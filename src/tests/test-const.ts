const user = {
  email: 'johndoe@me.com',
};

export const authorized = {
  isAuthenticated: true,
  user,
  isLoading: false,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};

export const isLoading = {
  isAuthenticated: false,
  user,
  isLoading: true,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};

export const nonAuthorized = {
  isAuthenticated: false,
  user,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};
