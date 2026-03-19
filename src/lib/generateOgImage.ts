type GenerateOgImageOptions = {
    title: string;
    description?: string;
};

function encodeOverlayText(text: string) {
    return encodeURIComponent(text)
        .replace(/,/g, "%2C")
        .replace(/\//g, "%2F");
}

export function generateOgImage({
    title,
    description = "",
}: GenerateOgImageOptions) {
    const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
    const templateId = import.meta.env.PUBLIC_CLOUDINARY_OG_TEMPLATE;

    if (!cloudName || !templateId) {
        throw new Error(
            "Missing Cloudinary env vars. Set PUBLIC_CLOUDINARY_CLOUD_NAME and PUBLIC_CLOUDINARY_OG_TEMPLATE."
        );
    }

    const encodedTitle = encodeOverlayText(title);
    const encodedDescription = encodeOverlayText(description);

    const transformations = [
        "f_auto",
        "q_auto",
        "w_1200,h_630,c_fill",
        `l_text:Arial_54_bold_line_spacing_-10:${encodedTitle},co_rgb:0F172A,w_700,c_fit,g_north_west,x_72,y_86`,
        `l_text:Arial_25:${encodedDescription},co_rgb:64748B,w_620,c_fit,g_north_west,x_74,y_245`,
    ].join("/");

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${templateId}.png`;
}