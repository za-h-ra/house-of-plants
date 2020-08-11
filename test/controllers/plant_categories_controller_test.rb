require 'test_helper'

class PlantCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @plant_category = plant_categories(:one)
  end

  test "should get index" do
    get plant_categories_url, as: :json
    assert_response :success
  end

  test "should create plant_category" do
    assert_difference('PlantCategory.count') do
      post plant_categories_url, params: { plant_category: { name: @plant_category.name, user_id: @plant_category.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show plant_category" do
    get plant_category_url(@plant_category), as: :json
    assert_response :success
  end

  test "should update plant_category" do
    patch plant_category_url(@plant_category), params: { plant_category: { name: @plant_category.name, user_id: @plant_category.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy plant_category" do
    assert_difference('PlantCategory.count', -1) do
      delete plant_category_url(@plant_category), as: :json
    end

    assert_response 204
  end
end
