class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :saved_places #, :password_digest

  # has_many :saved_places

  def saved_places
    self.object.saved_places
  end

end
