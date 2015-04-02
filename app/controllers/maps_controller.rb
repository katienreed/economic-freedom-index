class MapsController < ApplicationController
  def index
    @data = Map.get_data
    render json: @data
  end
end
