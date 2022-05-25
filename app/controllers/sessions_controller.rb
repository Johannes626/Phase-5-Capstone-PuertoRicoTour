class SessionsController < ApplicationController

    include ActionController::Cookies

    def create #login logic
        found_user_to_login = User.find_by_username(params[:username])
        if found_user_to_login
            if found_user_to_login.authenticate(params[:password])
                session[:user_id] = found_user_to_login.id
                render json: found_user_to_login
            else
                render json: {errors: "Please type in correct password."}
            end
        else
            render json: {errors: "Username or Password does not match."}
        end
    end

    def destroy #logout logic
        session.delete(:user_id)
        render json: {message: "Log out success!"}
    end

    def get_user_in_session #userInSession logic
        # byebug
        user_logged_in = User.find_by_id(session[:user_id])
        render json: user_logged_in
    end

end
