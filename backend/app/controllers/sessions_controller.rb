class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
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
