require 'test_helper'

class PlantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @plant = plants(:one)
  end

  test "should get index" do
    get plants_url, as: :json
    assert_response :success
  end

  test "should create plant" do
    assert_difference('Plant.count') do
      post plants_url, params: { plant: { date_purchased: @plant.date_purchased, food_frequency: @plant.food_frequency, last_watered: @plant.last_watered, location: @plant.location, name: @plant.name, temperature: @plant.temperature, user_id: @plant.user_id, water_frequency: @plant.water_frequency } }, as: :json
    end

    assert_response 201
  end

  test "should show plant" do
    get plant_url(@plant), as: :json
    assert_response :success
  end

  test "should update plant" do
    patch plant_url(@plant), params: { plant: { date_purchased: @plant.date_purchased, food_frequency: @plant.food_frequency, last_watered: @plant.last_watered, location: @plant.location, name: @plant.name, temperature: @plant.temperature, user_id: @plant.user_id, water_frequency: @plant.water_frequency } }, as: :json
    assert_response 200
  end

  test "should destroy plant" do
    assert_difference('Plant.count', -1) do
      delete plant_url(@plant), as: :json
    end

    assert_response 204
  end
end
