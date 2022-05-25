class UsersController < ApplicationController
  
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :user_create_error

  # GET /users
  def index
    render json: User.all
  end
  # GET /users/:id
  def show
    found_user = User.find_by_id(params[:id])
    if found_user
      render json: found_user
    else
      user_not_found
    end
  end
  # POST /users
  def create
    new_user = User.new(user_create_params)
    if new_user.save
        render json: new_user, status: :created
    else
        render json: {errors: new_user.errors.full_messages}
    end
  end
  # PATCH/PUT /users/:id
  def update
    found_user = User.find_by_id(params[:id])
    if found_user
        if found_user.update(user_update_params)
            render json: found_user
        else
            render json: {errors: found_user.errors.full_messages}
        end
    else
        user_not_found
    end
  end
  # DELETE /users/1
  def destroy
    found_user = User.find_by_id(params[:id])
    if found_user
      user_movies = found_user.saved_places
      user_movies.destroy_all
      found_user.destroy
      render json: found_user.id
    else
      user_not_found
    end
  end

  private
    ## STRONG PARAMS-------------
  def user_create_params
    params.permit(:name, :username, :email, :password)
  end

  def user_update_params
      params.permit(:name, :username, :email, :password)
  end
  ## STRONG PARAMS-------------^^^^^

  ## CONTROLLER RESCUE METHODS----------
  def user_not_found 
    render json: { errors: "Could not find user..." }
  end

  def user_create_error(invalid_user_exception)
    render json: { errors: invalid_user_exception.record.errors.full_messages}
  end

end
