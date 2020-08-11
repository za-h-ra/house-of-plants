class AddImageUrlToPlantCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :plant_categories, :image_url, :string
  end
end
