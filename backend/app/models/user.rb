class User < ApplicationRecord
  has_secure_password

  has_many :observations
  has_many :messiers, through: :observations
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
