class RemoveUserFromPlants < ActiveRecord::Migration[6.0]
  def change
    remove_column :plants, :user_id, :string
  end
end
