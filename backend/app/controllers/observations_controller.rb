class ObservationsController < ApplicationController
  def index
    @user = User.find_by(id: session[:user_id])
    @observations = @user.messiers
    render json: { observations: @observations }
  end

  def create
    @user = User.find_by(id: params[:userId])
    @user.messiers << Messier.find_by(id: params[:messierId])
    @observations = @user.messiers
    render json: { observations: @observations }
  end

  private

  def observation_params
    params.require(:user).permit(:username, :password, :id)
  end
end
