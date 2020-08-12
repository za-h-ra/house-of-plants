class User < ApplicationRecord
  has_secure_password 

  has_many :plants 
  has_many :plant_categories

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

end
