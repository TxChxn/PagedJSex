import { Previewer } from "pagedjs";
import { renderToString } from "react-dom/server";
import { useEffect } from "react";
import { RepeatingTableHeaderHandler } from "./handlers/RepeatingTableHeader";

const DEFAULT_PAGE_CSS = `
#pdf_header {
  position: running(pdf_header);
}

#pdf_footer {
  position: running(pdf_footer);
}

.counter_page::after {
  content: counter(page);
}

.counter_pages::after {
  content: counter(pages);
}

@page {
  size: A4;
  margin: 2cm;

  @top-center {
    content: element(pdf_header);
  }
  
  @bottom-center {
    content: element(pdf_footer);
  }
}`;

export const Preview = ({ children, pageCSS }) => {
  console.log("render Preview");
  const html = renderToString(children);

  useEffect(() => {
    const previewer = new Previewer();
    const previewElement = document.createElement("div");
    document.body.append(previewElement);

    // Register handlers
    previewer.registerHandlers(RepeatingTableHeaderHandler);

    /* 
    In order for this to work well, it is necessary to add CSS as an object, the key does not matter.
    This overwrites any default CSS added before including by PagedJS.
    */
    previewer
      .preview(html, [{ _: pageCSS || DEFAULT_PAGE_CSS }], previewElement)
      .then((info) => {
        console.log(info);
      });
    return () => {
      // Clean style elements created by PagedJS
      const pagedStyleElements = document.querySelectorAll(
        "style[data-pagedjs-inserted-styles]"
      );
      pagedStyleElements.forEach((element) => element.remove());
      previewElement.remove();
    };
  }, [html, pageCSS]);

  return null;
};
