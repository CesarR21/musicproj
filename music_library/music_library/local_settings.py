SECRET_KEY = 'django-insecure-4-ff7h-v8hdcsrk)rqurk1v+3a2(7*t1l*x&b-e7%2$t6vz1sc'

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'music_library_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True

        }
    }
}