class User < ApplicationRecord
  has_secure_password

  has_many :observations
  has_many :messiers, through: :observations
  has_many :friendships
  has_many :friends, through: :friendships

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
