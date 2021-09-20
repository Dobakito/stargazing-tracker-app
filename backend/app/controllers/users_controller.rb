class UsersController < ApplicationController
  def index
    @users = User.all
    render json: { users: @users }
  end

  def create
    @user = User.create!(user_params)
    if @user.save
      render json: {
        user: @user,
        logged_in: true,
      }
    else
      render json: { status: 500 }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
