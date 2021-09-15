class ObservationsController < ApplicationController
  def index
    @user = User.find_by(id: params[:user_id])
    @observations = @user.messiers
    render json: { observations: @observations }
  end

  def create
    @user = User.find_by(id: params[:user_id])
    @user.messiers << Messier.find_by(id: params[:messier_id])
    @observations = @user.messiers
    render json: { observations: @observations }
  end

  private

  def observation_params
    params.require(:user).permit(:username, :password, :id)
  end
end
