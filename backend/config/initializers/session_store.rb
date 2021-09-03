if Rails.env === "production"
  Rails.application.config.session_store :cookie_store,
                                         key: "_stargazing-tracker",
                                         domain: "stargazing-tracker-json-api"
else
  Rails.application.config.session_store :cookie_store,
                                         key: "_stargazing-tracker"
end
