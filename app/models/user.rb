class User < ApplicationRecord
    has_many :saved_places
    has_many :places, through: :saved_places

    has_secure_password

    validates :username, uniqueness: true
end
