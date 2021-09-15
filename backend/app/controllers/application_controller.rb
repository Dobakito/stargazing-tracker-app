class ApplicationController < ActionController::API
  helper_method :logout!

  def logout!
    session.clear
  end
end
