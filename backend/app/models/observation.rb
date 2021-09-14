class Observation < ApplicationRecord
  belongs_to :user
  belongs_to :messier

  validates_uniqueness_of :messier_id, scope: :user_id
end
