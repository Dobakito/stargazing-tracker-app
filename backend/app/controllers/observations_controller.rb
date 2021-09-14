class ObservationsController < ApplicationController
  def index
    set_user
    @observations = @user.messiers
    render json: { observations: @observations }
  end

  def create
    @user = User.find_by(id: params[:userId])
    @user.messiers << Messier.find_by(id: params[:messierId])
    @observations = @user.messiers
    render json: { observations: @observations }
  end
end
