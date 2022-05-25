class PlacesController < ApplicationController
  # GET /places
  def index
    render json: Place.all
  end
end
