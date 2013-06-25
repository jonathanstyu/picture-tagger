class User < ActiveRecord::Base
  require "bcrypt"
  attr_accessible :username, :password

  has_many :photos

  has_many :friendships
  has_many :friends, :through => :friendships

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def verify_password(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def assign_new_token!
    self.token = SecureRandom.urlsafe_base64(24)
    self.save!

    return self.token
  end

end
