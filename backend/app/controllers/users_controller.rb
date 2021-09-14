class UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    if @user.save
      login!
      current_user
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
