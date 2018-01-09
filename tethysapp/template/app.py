from tethys_sdk.base import TethysAppBase, url_map_maker


class Template(TethysAppBase):
    """
    Tethys app class for Template.
    """

    name = 'Template'
    index = 'template:home'
    icon = 'template/images/icon.gif'
    package = 'template'
    root_url = 'template'
    color = '#372127'
    description = 'Template'
    tags = ''
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='template',
                controller='template.controllers.home'
            ),
            UrlMap(
                name='semantic',
                url='template/semantic',
                controller='template.controllers.semantic'
            ),
        )

        return url_maps
