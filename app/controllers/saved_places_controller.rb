class SavedPlacesController < ApplicationController
  
  rescue_from ActiveRecord::RecordNotFound, with: :save_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :saved_place_create_error

  # GET /saved_places
  def index
    render json: SavedPlace.all
  end
  #POST /saved_places
  def create
    new_save = SavedPlace.new(saved_place_create_params)
    if new_save.save
      render json: new_save
    else
      render json: {errors: new_save.errors.full_messages}
    end
  end
  #PATCH /saved_places/:id
  def update
    found_save = SavedPlace.find_by_id(params[:id])
    if found_save
      if found_save.update(saved_place_update_params)
        render json: found_save
      else
        render json: {errors: found_save.errors.full_messages}
      end
    else
      save_not_found
    end
  end
  #DELETE /saved_places/:id
  def destroy
    found_save = SavedPlace.find_by_id(params[:id])
    if found_save
      found_save.destroy
      render json: found_save.id
    else
      save_not_found
    end
  end

  private
  ## STRONG PARAMS-------------
  def saved_place_create_params
    params.permit(:name, :image, :location, :description, :restaurant, :tourist_loc, :favorite, :user_id, :place_id)
  end

  def saved_place_update_params
    params.permit(:favorite)
  end
  ## STRONG PARAMS-------------

  ## CONTROLLER RESCUE METHODS----------
  def save_not_found 
    render json: { errors: "Could not find saved place..." }
  end

  def saved_place_create_error(invalid_save_exception)
    render json: { errors: invalid_save_exception.record.errors.full_messages }
  end
end