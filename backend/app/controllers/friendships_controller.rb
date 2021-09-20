class FriendshipsController < ApplicationController
  def index
    @user = User.find_by(id: params[:user_id])
    @friends = @user.friends
    render json: { friends: @friends }
  end

  def create
    user_friendship = Friendship.create(user_id: params[:user_id], friend_id: params[:friend_id])
    friend_friendship = Friendship.create(user_id: params[:friend_id], friend_id: params[:user_id])
    if user_friendship.save && friend_friendship.save
      render json: { success: true }
    else
      render json: {
               status: 500,
               message: "Failed to add friend",
             }
    end
  end
end
