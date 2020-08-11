class PlantCategoriesController < ApplicationController
  before_action :set_plant_category, only: [:show, :update, :destroy]

  # GET /plant_categories
  def index
    @plant_categories = PlantCategory.all

    render json: @plant_categories
  end

  # GET /plant_categories/1
  def show
    render json: @plant_category
  end

  # POST /plant_categories
  def create
    @plant_category = PlantCategory.new(plant_category_params)

    if @plant_category.save
      render json: @plant_category, status: :created, location: @plant_category
    else
      render json: @plant_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plant_categories/1
  def update
    if @plant_category.update(plant_category_params)
      render json: @plant_category
    else
      render json: @plant_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plant_categories/1
  def destroy
    @plant_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant_category
      @plant_category = PlantCategory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def plant_category_params
      params.require(:plant_category).permit(:name, :user_id)
    end
end
