const VideoSadrzaji = () => {
  return (
    <div>
      <h1 className="title">Video Sadržaji</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-16">
        <iframe
          width="320rem"
          height="180rem"
          src="https://www.youtube-nocookie.com/embed/5mSl1gRuvzQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <iframe
          width="320rem"
          height="180rem"
          src="https://www.youtube-nocookie.com/embed/tXH25y-7XPA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <iframe
          width="320rem"
          height="180rem"
          src="https://www.youtube.com/embed/UcN7kTkGTv0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowFullScreen"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSadrzaji;
