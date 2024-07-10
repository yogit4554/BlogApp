import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // login kra do 
                return this.login(email,password);
            }
            else{
                return userAccount;
            }
            
        } catch (error) {
            console.log(`error whilecreadting login ${error.message}`)
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password); // error 
        } catch (error) {
            console.log(`error while login ${error.message}`);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`error while fetching current user ${error.message}`)
        }

        return null;
    }


    async logout() {
        try {
            await this.account.deleteSessions();  // will logout from all session
        } catch (error) {
            console.log(`error while logout ${error.message}`)
        }
    }

}

const authService = new AuthService();

export default authService;