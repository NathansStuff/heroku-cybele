class DailyUpdate < ApplicationRecord
  belongs_to :animal
  # validates :ate_food, presence: true
  # validates :drank_water, presence: true
  # validates :animal_id, presence: true
  validates_presence_of :animal_id
end
