"""Schema for resume."""

from typing import Optional

from pydantic import BaseModel, model_serializer


class StringModel(BaseModel):
    """Base Model for string."""

    @model_serializer
    def serialize_model(self):
        """Customize serialize method."""
        return self.value if not self.hide else ""


class ListOfStringModel(BaseModel):
    """Base Model for list of string."""

    @model_serializer
    def serialize_model(self):
        """Customize serialize method."""
        if self.hide:
            return []
        return self.value


class ListOfDictionaryModel(BaseModel):
    """Base Model for list of dictionary."""

    @model_serializer
    def serialize_model(self):
        """Customize serialize method."""
        if self.hide:
            return []
        return [i.model_dump() for i in self.value if i.model_dump()]


class DictionaryModel(BaseModel):
    """Base Model for dictionary."""

    @model_serializer
    def serialize_model(self):
        """Customize serialize method."""
        if self.hide:
            return {}
        return self.value.model_dump()


class Name(StringModel):
    """Model for name."""

    hide: bool
    value: str


class Phone(StringModel):
    """Model for phone."""

    hide: bool
    value: str


class Email(StringModel):
    """Model for email."""

    hide: bool
    value: str


class Location(StringModel):
    """Model for location."""

    hide: bool
    value: str


class Company(StringModel):
    """Model for company."""

    hide: bool
    value: str


class Occupation(StringModel):
    """Model for occupation."""

    hide: bool
    value: str


class Summary(StringModel):
    """Model for summary."""

    hide: bool
    value: str


class SocialNetwork(BaseModel):
    """Model for social network."""

    link: str
    alt_text: str


class Github(DictionaryModel):
    """Model for github."""

    hide: bool
    value: SocialNetwork


class Website(DictionaryModel):
    """Model for website."""

    hide: bool
    value: SocialNetwork


class Linkedin(DictionaryModel):
    """Model for linkedin."""

    hide: bool
    value: SocialNetwork


class Achievement(BaseModel):
    """Model for achievement."""

    name: str
    year: int


class Achievements(ListOfDictionaryModel):
    """Model for achievements."""

    hide: bool
    value: list[Achievement]


class Languages(ListOfStringModel):
    """Model for language."""

    hide: bool
    value: list[str]


class Skill(BaseModel):
    """Model for skill."""

    cloud_technology: list[str]
    software_development: list[str]
    programming_language: list[str]


class Skills(BaseModel):
    """Model for skills."""

    hide: bool
    value: Skill

    @model_serializer
    def serialize_model(self) -> dict:
        """Serialize method."""
        if self.hide:
            return {}
        return self.value.model_dump()


class Certificate(BaseModel):
    """Model for certificate."""

    name: str
    issuer: str
    issue_date: str
    expire_date: str
    id: str
    link: str


class Certificates(ListOfDictionaryModel):
    """Model for certificates."""

    hide: bool
    value: list[Certificate]


class Duration(BaseModel):
    """Model for duration."""

    end: str
    start: str


class Education(BaseModel):
    """Model for education."""

    name: str
    degree: str
    location: str
    duration: Duration
    highlight: list[str]


class EducationItem(DictionaryModel):
    """Model for education item."""

    hide: bool
    value: Education


class Educations(ListOfDictionaryModel):
    """Model for educations."""

    hide: bool
    value: list[EducationItem]


class Experience(BaseModel):
    """Model for experience."""

    name: str
    title: str
    location: str
    duration: Duration
    highlight: list[str]


class ExperienceItem(DictionaryModel):
    """Model for experience item."""

    hide: bool
    value: Experience


class Experiences(ListOfDictionaryModel):
    """Model for experiences."""

    hide: bool
    value: list[ExperienceItem]


class Project(BaseModel):
    """Model for project."""

    name: str
    description: str
    duration: Duration
    highlight: list[str]
    technology: list[str]
    href: Optional[str] = None


class ProjectItem(DictionaryModel):
    """Model for project item."""

    hide: bool
    value: Project


class Projects(ListOfDictionaryModel):
    """Model for projects."""

    hide: bool
    value: list[ProjectItem]


class Model(BaseModel):
    """Model for resume."""

    name: Name
    phone: Phone
    email: Email
    location: Location
    company: Company
    occupation: Occupation
    github: Github
    website: Website
    linkedin: Linkedin
    summary: Summary
    achievements: Achievements
    educations: Educations
    languages: Languages
    skills: Skills
    certificates: Certificates
    experiences: Experiences
    projects: Projects
