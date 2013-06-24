class User < ActiveRecord::Base
  attr_accessible :username, :password

  has_many :photos

  has_many :friends, :class_name => "User"

  def password=(password)
    self.password_digest = BCrypt.create(password)
  end

  def verify_password(password)
    BCrypt.new(self.password_digest) == password
  end

  def assign_new_token!
    self.token = SecureRandom.urlsafe_base64(24)
    self.save!

    return self.token
  end
end
