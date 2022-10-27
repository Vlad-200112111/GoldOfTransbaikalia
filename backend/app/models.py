from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        user = self.create_user(username, email, password=password, **extra_fields)
        user.is_active = True
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]

    def get_full_name(self):
        return f"{self.first_name} - {self.last_name}"

    def get_short_name(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return self.email



def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class News(models.Model):
    title = models.CharField(
        max_length=80, blank=False, null=False, db_index=True)
    caption = models.TextField(max_length=3500)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    creation_date = models.DateTimeField(auto_now=True)
    publication = models.BooleanField(default=False)

    # class Meta:
    #     app_label = 'news'

    def __str__(self):
        return self.title

class Comments(models.Model):
    content = models.CharField(max_length=450)
    creation_date = models.DateField(auto_now=True)
    new = models.ForeignKey(to=News, on_delete=models.CASCADE)

    # class Meta:
    #     app_label = 'comments'

    def __str__(self):
        return self.content