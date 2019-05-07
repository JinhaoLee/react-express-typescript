import knex from "../db/knex";

type User = {
  id: string;
  email: string;
  password: string;
};

class UserModel {
  public getUserByEmail = async (email: string): Promise<User> => {
    const userRows = await knex("users").where({ email });
    return userRows[0];
  };

  public IsPasswordValid = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    const userRows: [{ password: string }] = await knex("users")
      .select("password")
      .where({ email });
    if (!userRows.length || !userRows) {
      return false;
    }
    return password === userRows[0].password;
  };

  public addNewUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await knex("users").insert({ email, password });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default UserModel;
