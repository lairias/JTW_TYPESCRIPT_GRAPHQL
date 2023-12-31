import bcrypt from 'bcrypt'

export const encrptPassword = async (password : string) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  return pass;
};

export const compararPassword = async (password : string, reveivedPassword : any) => {
  return await bcrypt.compare(password, reveivedPassword);
};


