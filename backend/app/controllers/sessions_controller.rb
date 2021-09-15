class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])
    # byebug
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: {
               logged_in: true,
               user: @user,
             }
    else
      render json: {
               status: 401,
               errors: ["no such user, please try again"],
             }
    end
  end

  def destroy
    logout!
    render json: {
             status: 200,
             logged_out: true,
           }
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
