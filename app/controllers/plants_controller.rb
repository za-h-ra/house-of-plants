class PlantsController < ApplicationController
  before_action :set_plant, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :create]
  # GET /plants
  def index
    @plants = @current_user.plants

    render json: @plants
  end

  # GET /plants/1
  def show
    render json: @plant, include: :plant_category
  end

  # POST /plants
  def create
    @plant = Plant.new(plant_params)
    p @current_user
    @plant.user_id = @current_user.id
    if @plant.save
      render json: @plant, status: :created, location: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plants/1
  def update
    if @plant.update(plant_params)
      render json: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plants/1
  def destroy
    @plant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant
      @plant = Plant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def plant_params
      params.require(:plant).permit(:name, :date_purchased, :location, :temperature, :last_watered, :water_frequency, :food_frequency, :user_id, :image_url, :plant_category_id)
    end
end
