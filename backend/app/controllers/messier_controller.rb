class MessierController < ApplicationController
  def index
    @messiers = Messier.all
    render json: @messier
  end

  def show
    @messier = Messier.find(params[:id])
  end

  def create
  end

  def update
  end

  private

  def messier_params
    params.require(:messier).permit(:m_number, :common_name, :description, :constellation, :obj_type, :magnitude, :dec, :ra, :sky_pic, :pretty_pic)
  end
end
