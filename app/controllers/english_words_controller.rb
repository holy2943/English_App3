class EnglishWordsController < ApplicationController
  def index
  end

  def new
    @english_word = EnglishWord.new
  end
  
  def create
    EnglishWord.create(key_word_params) #モデル名はキャメルケースで記入
    redirect_to new_english_word_path   # 保存後にnewページを再度呼び出し
  end
  
  private
  def key_word_params
    params.require(:english_word).permit(:key_word)
  end



end
