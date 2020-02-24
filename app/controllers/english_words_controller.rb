class EnglishWordsController < ApplicationController
  def index
    @english_words = EnglishWord.all
  end

  def new
  end

end
