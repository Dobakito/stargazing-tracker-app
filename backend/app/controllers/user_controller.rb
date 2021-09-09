class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.find_or_create_by(user_params)
    if @user.save
      login!
      render json: @user
    else
      render json: @user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
