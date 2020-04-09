class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @english_word = @user.english_words
  end



end
