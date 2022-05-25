class Place < ApplicationRecord
    has_many :saved_places
    has_many :users, through: :saved_places
end
