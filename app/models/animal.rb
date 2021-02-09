class Animal < ApplicationRecord
    has_many :daily_updates, :dependent => :delete_all
    validates :name, presence: true
    validates :age, numericality: { greater_than: 0}, presence: true
    validates :breed, presence: true
end
