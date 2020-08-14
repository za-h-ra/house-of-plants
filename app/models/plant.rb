class Plant < ApplicationRecord
  belongs_to :user
  belongs_to :plant_category
end
